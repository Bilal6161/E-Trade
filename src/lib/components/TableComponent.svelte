<script>
    import { ResizableColumns } from 'svelte-resizable-columns';

    export let structure = {}
    export let data = []

    let editingKey = ''
    let editingRow = ''

    let currentSort = {key: '', type: false}

    const sort = (key) => {

        // Setting a default value
        let type = false

        if (currentSort.key = key) {
            type = !(currentSort.type)
        }

        data = data.sort(
            (a, b) => {
                if (type) {
                    return ('' + a[key]).localeCompare(b[key])
                } else {
                    return ('' + b[key]).localeCompare(a[key])
                }
            }
        )

        currentSort = {
            key,
            type,
        }
    }

</script>

<style lang="postcss" scoped>
    .table .input {
        text-size: inherit !important;
        @apply p-0 h-auto w-full;
    }
</style>

<table class="table table-compact w-full table-zebra" use:ResizableColumns>
    <thead class="text-accent-focus ">
        <tr>
            <th>#</th>

            {#each Object.keys(structure) as key, index}
                <th on:click={() => sort(key)}>
                    {structure[key].title || key}
                    <i class={structure[key].src}></i>
                </th>
            {/each}
        </tr>
    </thead>

    {#if data.length}        
        <tbody>
            {#each data as row, rowIndex}
                <tr class="hover">
                    <td>
                        {rowIndex + 1}
                    </td>

                    {#each Object.keys(structure) as key, keyIndex}
                        <td class="truncate overflow-ellipsis  border-t" on:click={() => {editingKey = key; editingRow = rowIndex}}>
                            
                            <!-- INPUT -->
                            {#if structure[key].type === String || structure[key].type === Number}
                                {#if editingKey === key && editingRow === rowIndex}
                                    <input type="text" class="input" bind:value={row[key]} on:blur={() => {editingKey = ''; editingRow = ''}}>
                                {:else}
                                    {row[key] || structure[key].blank || ''}
                                {/if}

                            {:else if structure[key].type === Boolean}
                                {#if editingKey === key && editingRow === rowIndex}
                                    <input type="checkbox" class="checkbox" bind:value={row[key]} on:blur={() => {editingKey = ''; editingRow = ''}}>
                                {:else}
                                    <input type="checkbox" class="checkbox readonly" checked={row[key]}>
                                {/if}
                            {:else if structure[key].type === 'Image'}
                                {#if editingKey === key && editingRow === rowIndex}
                                    <input type="checkbox" class="checkbox" bind:value={row[key]} on:blur={() => {editingKey = ''; editingRow = ''}}>
                                {:else}
                                    <img src={row[key]} alt={row[key]}>
                                {/if}
                            {/if}

                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
        
    {/if}
</table>