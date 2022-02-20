import glob
import os


filenames = glob.glob("src/routes/examples/**/_*.svelte")

template = """
<script lang="ts">
	import Example from './%s';
	import DemoLayout from '../../_demo_layout.svelte';
	const code = `%s`;
</script>

<DemoLayout code={code}>
	<svelte:fragment slot="title">%s</svelte:fragment>
	<svelte:fragment slot="example"><Example /></svelte:fragment>
</DemoLayout>

"""


def escape(html):
    html = html.replace("&", "&amp;")
    html = html.replace("<", "&lt;")
    html = html.replace(">", "&gt;")
    html = html.replace('"', "&quot;")
    html = html.replace("'", "&#039;")
    return html


for filename in filenames:
    with open(filename, "r") as f:
        src = f.read()
        # print(src)
        out_filename = os.path.basename(filename)[1:]
        out_dir = os.path.dirname(filename)
        # print(out_filename)
        # print(out_dir)

        with open(os.path.join(out_dir, out_filename), "w") as f_out:
            f_out.write(
                template % (os.path.basename(filename), escape(src), out_filename)
            )


def make_tutorial_tree(path):
    html = ""
    try:
        names = os.listdir(path)
    except OSError:
        pass
    else:
        for name in names:
            full_path = os.path.join(path, name)
            if os.path.isdir(full_path):
                html += f"<li>{name}<ul>{make_tutorial_tree(full_path)}</ul></li>\n"
            else:
                if name.startswith("_"):
                    out_dir = "/".join(os.path.dirname(full_path).split("/")[2:])
                    out_filename = os.path.basename(name)[1:].split(".")[0]
                    html += f'<li><a href="{out_dir}/{out_filename}"  class="text-purple-500 hover:text-purple-700 underline ">{out_filename}</a></li>\n'
    return html


projectdir = "src/routes/examples"
html = """
<div class="pt-6 mx-auto container">
  <ul>%s
  </ul>
</div>


<style>
  li{
    margin-left:2rem;
  }
</style>

""" % make_tutorial_tree(
    projectdir
)

with open("src/routes/index.svelte", "w") as f:
    f.write(html)
