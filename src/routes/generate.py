import glob
import os

filenames = glob.glob("examples/**/_*.svelte")


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
        print(out_filename)
        print(out_dir)

        with open(os.path.join(out_dir, out_filename), "w") as f_out:
            f_out.write(template % (os.path.basename(filename), escape(src), out_filename))
