<?php require "./views/components/header.php" ?>
<?php require "./views/components/navbar.php" ?>

<div class="main">
    <div class="main__middle">
        <h1 class="main__middle--h1">HI, I'm n0o0b090lv <span class="randomizer">['v']</span> </h1>
        <p class="main--small">You can call me noob <span class="randomizer">['v']</span> </p>
        <hr class="main--divider">
        <p>I am a male <?php
            $diff = date_diff(date_create(date("d/m/y")), date_create("9/1/2007"));
            // btw if you checking source code to see my bday, this is only aprox ;PP
            // wont actualy publish my bday ;-;
            echo $diff->y;
        ?>-yo pansexual from LATVIA <span class="randomizer">[;))]</span></p> 
        <p>Ambivert and heck of a goofy fella <span class="randomizer">[;))]</span></p>
        <p> <span class="randomizer">[;))]</span></p>
        <hr class="main--divider">
        
        <hr class="main--divider">
    </div>
</div>

<?php require "./views/components/footer.php" ?>
