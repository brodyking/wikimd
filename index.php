<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="keywords" content="Photos, Viewer">
        <meta name="description" content="Photo Gallery">
        <meta name="author" content="Anon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="src/img/favicon.ico">
        <title>Main Page [wikimd]</title>
        <link rel="stylesheet" href="src/css/index.css">
        <script src="src/js/shutdown/showdown.min.js"></script>
        <script src="data/conf.js"></script>
        <script defer src="src/js/index.js"></script>
    </head>
    <body>
        <?php
            if ($_GET['page'] == "") {
                $_GET['page'] = "Main Page";
            }
        ?>
        <div id="nav"></div>
        <div id="head">
            <h1><?php
                echo $_GET['page'];
            ?></h1>
        <div id="motd"></div>
        </div>
        <div id="content">
        This site <rt><b>requires javascript</b></rt> to function. Please disable any ad-blockers that may be causing this issue.
        </div>
        <div id="footer"></div>
        <div id="pageparam"><?php
            echo $_GET['page'];
        ?></div>
    </body>
</html>
