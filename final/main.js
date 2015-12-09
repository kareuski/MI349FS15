<head>
<script type="text/javascript">
var image1 = new Image()
image1.src = "ss1.png"
var image2 = new Image()
image2.src = "ss2.png"
var image3 = new Image()
image3.src = "ss3.png"
var image4 = new Image()
image4.src = "ss4.png"
var image5 = new Image()
image5.src = "ss5.png"
var image6 = new Image()
image6.src = "ss6.png"

</script>
</head>
<body>
<p><img src="images/outdooryoga_2.jpg" width="350" height="250" name="slide" /></p>
<script type="text/javascript">
        var step=1;
        function slideit()
        {
            document.images.slide.src = eval("image"+step+".src");
            if(step<6)
                step++;
            else
                step=1;
            setTimeout("slideit()",1500);
        }
        slideit();
</script>
</body>
		</div>
</body>
</html>
