const canvas = document.getElementById('GameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 2048;
canvas.height = 1024;
const player = new Player(canvas.width /2, canvas.height - 275, 125, 275, 7,"./sprites/pixil-frame-0 (10)_scaled_6x_pngcrushed.png","./sprites/pixil-frame-0 (10)_scaled_6x_pngcrushedL.png");
const levelIndexes = [-1, 0, 1, 2, 3, 4];
const bLevel = Math.min(...levelIndexes);
const fLevel = Math.max(...levelIndexes);
let nextLevelExist, prevLevelExist;
const Levels = [
    new Level(levelIndexes[0], "red","./sprites/present character1.png",0,canvas.width,canvas.height,0,"Γιατί είσαι εδώ;\nΠήγαινε πίσω δεν έχει κάτι εδώ\nυπόσχομαι. 100% fr"),
    new Level(levelIndexes[1], "antiquewhite","./sprites/StartBg.png",0,canvas.width,canvas.height,0,"καλώς ήρθατε στην Δανία\nπήγαινε από εδώ\n--->"),
    new Level(levelIndexes[2], "beige","./sprites/Berg_scaled_3x_pngcrushed.png",0,canvas.width,canvas.height,0,"Βρισκόμαστε στο Nyhavn harbour, ένα ιστορικό λημάνι στην Κοπεγχάγη, την πρωτεύουσα της Δανίας. Το παλαιότερο κτήριο εδώ χτίστηκε το 1681! Είναι μία τουριστική περιοχή που έχει πολλά εστιατόρια και καφενεία. Χτίστηκε από τον βασιλιά Κριστιάν Ε', ανάμεσα στα έτη 1670 έως 1675."),
    new Level(levelIndexes[3], "lightblue","./sprites/Amalienborg.png",0,canvas.width,canvas.height,0,"Εδώ είναι το Amalienborg, όπου διαμένω κατά τους χειμερινούς μήνες. Χτίστηκε από την βασίλισσα Σοφία Αμαλία το 1750, και τα έργα ολοκληρώθηκαν δέκα χρόνια αργότερα."),
    new Level(levelIndexes[4], "orange","./sprites/FrederiksborgNPC_scaled_12x_pngcrushed.png",0,canvas.width,canvas.height,0,"Το Frederiksborg είναι ένα συγκρότημα κάστρων κτισμένο πάνω σε τρεις νησίδες. Χτίστηκε από τον βασιλιά Κριστιάν Δ' στις αρχές του 17ου αιώνα. Το 1859 το κάστρο ξαναχτίστηκε, και στην νέα ανακαίνηση αυτή προστέθηκαν και πολλά τζάκια, από τα οποία όμως το κάστρο κάηκε. Από το 1878, σε αυτό στεγάζεται το εθνικό ιστορικό μουσείο της Δανίας."),
];
const Flag = new Image();
Flag.src = "./sprites/DanishFlag.png";
const Playbtn = new Image();
Playbtn.src = "./sprites/Play Button_scaled_11x_pngcrushed.png";
let firstLoad = true;
function animate(){
    if(firstLoad){
        ctx.drawImage(Flag,0,0, canvas.width, canvas.height);
        ctx.drawImage(Playbtn, canvas.width /2 - 50, canvas.height /2 - 50, 135, 135);
        if(player.controls.special){
            firstLoad = false;
        }
    }else{
        Levels[player.levelIndex + Math.abs(bLevel)].draw(ctx);
        if(player.levelIndex < fLevel - 1){
            nextLevelExist = true;
        }else{
            nextLevelExist = false;
        }
        if(player.levelIndex > bLevel){
            prevLevelExist = true;
        }else{
            prevLevelExist = false;
        }
        player.update(ctx,0,canvas.width,nextLevelExist,prevLevelExist);
        Levels[player.levelIndex + Math.abs(bLevel)].update(player.x, player.controls.special, firstLoad);
    }
    window.requestAnimationFrame(animate);
}
animate();