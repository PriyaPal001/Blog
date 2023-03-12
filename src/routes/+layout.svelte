<script>
    import "../app.css";
  </script>

<div class="nav">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">blog</a></li>
        <li><a href="/">Details</a></li>
    </ul>
</div>

  <slot/>

<!-- <footer>
    <p>Created by <a href="">@priya</a></p>
</footer>   -->

<style>
    .nav {
        background-color: #333;
        overflow: hidden;
    }
    
    .nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }
    
    .nav li {
        float: left;
    }
    
    .nav li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    .nav li a:hover {
        background-color: #111;
    }
    
    .nav li a.active {
        background-color: #4CAF50;
    }
    
    .nav li.right {
        float: right;
    }
    
    @media screen and (max-width: 600px) {
        .nav li.right,
        .nav li {
            float: none;
        }
    }
</style>  