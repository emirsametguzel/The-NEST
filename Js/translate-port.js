document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');


    // bu sayfada ara sayfalar için side bar içeren bir translate kısmı olucak



    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // do this tr
            console.log('Checked');

            // header

            document.getElementById("he1").innerHTML = 'Takımımız';
            document.getElementById("he2").innerHTML = 'İçerikler';
            document.getElementById("he3").innerHTML = 'Egitimler';
            document.getElementById("he4").innerHTML = 'Makaleler';
            document.getElementById("he5").innerHTML = 'Sunumlar';
            document.getElementById("he6").innerHTML = 'Tasarımlar';
            document.getElementById("he7").innerHTML = 'Haberler';



            // sidebar

            document.getElementById("l1").innerHTML = 'Mekanik';
            document.getElementById("l2").innerHTML = 'Yazılım';
            document.getElementById("l3").innerHTML = 'PR';
            document.getElementById("l4").innerHTML = 'Tasarım';
            document.getElementById("l5").innerHTML = 'Elektronik';
            document.getElementById("l6").innerHTML = 'FRC';
            document.getElementById("l7").innerHTML = 'FYF';


        } else {
            // do that en
            console.log('Not checked');

            //header
            document.getElementById("he1").innerHTML = 'Our Team';
            document.getElementById("he2").innerHTML = 'Contents';
            document.getElementById("he3").innerHTML = 'Courses';
            document.getElementById("he4").innerHTML = 'Articles';
            document.getElementById("he5").innerHTML = 'Presentations';
            document.getElementById("he6").innerHTML = 'Designs';
            document.getElementById("he7").innerHTML = 'News';



            // sidebar

            document.getElementById("l1").innerHTML = 'Mechanic';
            document.getElementById("l2").innerHTML = 'Software';
            document.getElementById("l3").innerHTML = 'PR';
            document.getElementById("l4").innerHTML = 'Desing';
            document.getElementById("l5").innerHTML = 'Electronics';
            document.getElementById("l6").innerHTML = 'FRC';
            document.getElementById("l7").innerHTML = 'FYF';

        }

    });
});