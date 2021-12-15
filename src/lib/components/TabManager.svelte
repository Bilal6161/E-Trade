<script>
	import {OpenedTabs} from '$lib/stores/store';
	let openedTabs;
	OpenedTabs.subscribe(value => {
		openedTabs = value;
	})
</script>

<div class="bg-accent
            bg-opacity-50">
	<div class="tabs compact
                items-center">
		<div class="w-1/5 mx-2">
			Path / To / Form
		</div>
		<div class="flex justify-start -mx-6">
			{#each openedTabs as tab,index}
				<button class="tab tab-lifted gap-1">
					<i class="fas fa-cubes"></i>
					{tab.name}
					<i class="fas fa-ellipsis-v"></i>
				</button>
				{/each}

			<button class="tab font-bold text-lg">+</button>
		</div>

	</div>
</div>







<!--<button class="tab tab-lifted tab-active gap-1">-->
<!--	<i class="far fa-shopping-cart"></i>-->
<!--	POS-->
<!--	<i class="fas fa-ellipsis-v"></i>-->
<!--</button>-->
<!--<button class="tab tab-lifted gap-1">-->
<!--	<i class="fas fa-file-invoice"></i>-->
<!--	Sale invoice-->
<!--	<i class="fas fa-ellipsis-v"></i>-->
<!--</button>-->