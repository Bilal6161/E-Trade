<script>
    import TableComponent from "$lib/components/TableComponent.svelte";
    import data from '$lib/data.json'
    
    const structure = {
        Product: {
            type: Number,
            title: 'Product Code',
            src: 'fas fa-cubes text-accent fa-lg',
        },
        isActive: {
            type: Boolean,
            title: 'Active',
            src: 'fas fa-check-square text-accent fa-lg'
        },
        Price: {
            type: String,
            title: 'Price',
            src: 'fas fa-money-bill-alt text-green-800 fa-lg'
        },
        picture: {
            type: 'Image',
            title: 'Picture',
            
        },
        Offer: {
            type: String,
            title: 'Offer',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
        Discount: {
            type: String,
            title: 'Discount',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
        New_Rate: {
            type: String,
            title: 'New Rate',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
        Old_Rate: {
            type: String,
            title: 'Old Rate',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
        Old_ABC: {
            type: String,
            title: 'Old_ABC',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
        New_ABC: {
            type: String,
            title: 'New_ABC',
            src: 'fas fa-money-bill-alt text-accent fa-lg'
        },
    }
</script>

<div class="flex flex-col gap-12 w-full">
    <h1 class="text-2xl font-bold">Data</h1>

    <div class="w-full overflow-x-scroll">
        <TableComponent {data} {structure}/>
    </div>
    
</div>
