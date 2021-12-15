<script>

function move(element) {
		
		return {
			destroy() {
			}
		}
	}
	
	function resize(element) {
		const right = document.createElement('div')
		right.direction = 'east'
		right.classList.add('grabber')
		right.classList.add('right')
		
		const left = document.createElement('div')
		left.direction = 'west'
		left.classList.add('grabber')
		left.classList.add('left')
		
		const top = document.createElement('div')
		top.direction = 'north'
		top.classList.add('grabber')
		top.classList.add('top')
		
		const bottom = document.createElement('div')
		bottom.direction = 'south'
		bottom.classList.add('grabber')
		bottom.classList.add('bottom')
		
		const topLeft = document.createElement('div')
		topLeft.direction = 'northwest'
		topLeft.classList.add('grabber')
		topLeft.classList.add('top-left')
		
		const topRight = document.createElement('div')
		topRight.direction = 'northeast'
		topRight.classList.add('grabber')
		topRight.classList.add('top-right')
		
		const bottomLeft = document.createElement('div')
		bottomLeft.direction = 'southwest'
		bottomLeft.classList.add('grabber')
		bottomLeft.classList.add('bottom-left')
		
		const bottomRight = document.createElement('div')
		bottomRight.direction = 'southeast'
		bottomRight.classList.add('grabber')
		bottomRight.classList.add('bottom-right')
				
		const grabbers = [right, left, top, bottom, topLeft, topRight, bottomLeft, bottomRight]
		
		let active = null, initialRect = null, initialPos = null
		
		grabbers.forEach(grabber => {
			element.appendChild(grabber)
			grabber.addEventListener('mousedown', onMousedown)
		})
		
		function onMousedown(event) {
			active = event.target
			const rect = element.getBoundingClientRect()
			const parent = element.parentElement.getBoundingClientRect()
			
			console.log({rect, parent})
			
			initialRect = {
				width: rect.width,
				height: rect.height,
				left: rect.left - parent.left,
				right: parent.right - rect.right,
				top: rect.top - parent.top,
				bottom: parent.bottom - rect.bottom
			}
			initialPos = { x: event.pageX, y: event.pageY }
			active.classList.add('selected')
		}
		
		function onMouseup(event) {
			if (!active) return
			
			active.classList.remove('selected')
			active = null
			initialRect = null
			initialPos = null
		}
		
		function onMove(event) {
			if (!active) return
			
			const direction = active.direction
			let delta
			
			if (direction.match('east')) {
				delta = event.pageX - initialPos.x
				element.style.width = `${initialRect.width + delta}px`				
			}
			
			if (direction.match('west')) {
				delta = initialPos.x - event.pageX
				element.style.left = `${initialRect.left - delta}px`
				element.style.width = `${initialRect.width + delta}px`
			}
			
			if (direction.match('north')) {
				delta = initialPos.y - event.pageY
				element.style.top = `${initialRect.top - delta}px`
				element.style.height = `${initialRect.height + delta}px`
			}
			
			if (direction.match('south')) {
				delta = event.pageY - initialPos.y
				element.style.height = `${initialRect.height + delta}px`
			}
		}
		
		window.addEventListener('mousemove', onMove)	
		window.addEventListener('mouseup', onMouseup)	
		
		return {
			destroy() {
				window.removeEventListener('mousemove', onMove)
				window.removeEventListener('mousemove', onMousedown)
				
				grabbers.forEach(grabber => {
					element.removeChild(grabber)
				})
			}
		}
	}
	
	let grabber = true



</script>

<div class="flex overflow-auto w-full">
    <div class="flex flex-col fixed">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>

    <div class="flex flex-col">
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
        <textarea class="resize-x border rounded-md"></textarea>
    </div>


   


</div>
<div>
	<i class="fas fa-cubes"></i>
</div>
<div class="box" use:move use:resize>
		First Name
	</div>