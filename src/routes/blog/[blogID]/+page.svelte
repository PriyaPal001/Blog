<script>
// @ts-nocheck

    import { dataRoute, count } from "./../../../stores";
    import { page } from "$app/stores";
    $: dynId = $page.params.blogID;
    $: console.log(dynId);
  </script>
  
  <main>
    <h1>{$dataRoute[dynId].id-1}YOUR title FOR Post  IS {$dataRoute[dynId].title}</h1>
  
  </main>
  
  <style>
    main {
      padding: 0 5%;
    }
  </style>