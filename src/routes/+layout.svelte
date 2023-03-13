<script>
    import "../app.css";
  </script>

<div class="nav ">
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
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
    .nav {
        /* background-color: #333; */
        /* background-color :rgb(238,174,202) */
        background-color: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

        overflow: hidden;
    }
    
    .nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        /* background-color: #333;
         */
         background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

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
        background-color: rgb(100, 160, 230);
    }
    
    .nav li a.active {
        background-color: #4CAF50;
    }
    
    .nav li.right {
        float: right;
    }

    :global(body){
        background-image: url("https://static.wixstatic.com/media/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg/v1/fill/w_1310,h_6293,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/fee50a_8d5c6f21a5d14b919d4be75bd07b5337~mv2_d_3840_12495_s_3_2.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        font-family: 'Dancing Script', cursive;
        font-weight: bold;
        font-size: 20px;
        
    }
    
    @media screen and (max-width: 600px) {
        .nav li.right,
        .nav li {
            float: none;
        }
    }
</style>  