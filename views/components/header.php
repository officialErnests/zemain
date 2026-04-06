<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?? "??Noob??" ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/components/header.css">
    <link rel="stylesheet" href="/css/components/navbar.css">
    <link rel="stylesheet" href="/css/components/footer.css">
    <link rel="shortcut icon" href="/assets/XD_MAN.png" type="image/x-icon">
    <?php if (isset($customStyles)){
        foreach ($customStyles as $loading_style) { ?>
            <link rel="stylesheet" href="/css/<?= $loading_style ?>">
    <?php   }
        }?>
</head>
<body>