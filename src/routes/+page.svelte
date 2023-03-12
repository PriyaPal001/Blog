<script>
	import { count } from './../stores';
	import { dataRoute } from './../stores';
	console.log($count);

	let title = '';
	let content = '';

	let createPost = async() => {
		console.log(title, content);
		dataRoute.update((data) => {
			return [...data, { id: $dataRoute.length+1, title: title, content: content ,path:`/blog/${$dataRoute.length}`}];
		});
        console.log($dataRoute);
	};
</script>

<div class="create">
	<h1>Create a new blog post</h1>
	<form on:submit|preventDefault={createPost}>
		<label for="title">Title</label>
		<input type="text" name="title" id="title" bind:value={title} />
		<label for="content">Content</label>
		<textarea name="content" id="content" bind:value={content} />
		<button type="submit">Create</button>
	</form>
</div>

<section>
	<h1>Blog</h1>
    <ul>
        {#each $dataRoute as item}
            <li><a href="/blog/{item.id - 1}">{item.title}</a></li>
        {/each}
    </ul>
	<!-- <ul>
		{#await createPost()}
            <p>loading..........</p>
            {:then $dataRoute} 
            <p>bhale bhale shawa shawa</p>
        {/await}
	</ul> -->
</section>

<style>
	.create {
		max-width: 600px;
		margin: 0 auto;
	}
	.create form {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
	.create form label {
		display: block;
	}
	.create form input,
	.create form textarea {
		display: block;
		width: 100%;
		background: blueviolet;
		border-radius: 10px;
		color: aliceblue;
		padding: 0.5rem;
		border: 1px solid white;
	}
	.create form textarea {
		height: 200px;
	}
	.create form button {
		justify-self: end;
	}
</style>
