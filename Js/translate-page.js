document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');


    // birçok sayfa için sadece navbar ve footer içeren js 



    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // do this tr

            // header

            document.getElementById("he1").innerHTML = 'Takımımız';
            document.getElementById("he2").innerHTML = 'İçerikler';
            document.getElementById("he3").innerHTML = 'Egitimler';
            document.getElementById("he4").innerHTML = 'Makaleler';
            document.getElementById("he5").innerHTML = 'Sunumlar';
            document.getElementById("he6").innerHTML = 'Tasarımlar';
            document.getElementById("he7").innerHTML = 'Haberler';

            //footer

            document.getElementById("f1").innerHTML = 'Egitim Sayfaları';
            document.getElementById("f2").innerHTML = 'Sunumlar';
            document.getElementById("f3").innerHTML = 'Makaleler';
            document.getElementById("f4").innerHTML = 'Egitimler';
            document.getElementById("f5").innerHTML = 'Objeler';
            document.getElementById("f6").innerHTML = 'Sosyal Medya';
            document.getElementById("f7").innerHTML = 'Instagram';
            document.getElementById("f8").innerHTML = 'linkdIn';
            document.getElementById("f9").innerHTML = 'YouTube';

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

            //footer

            document.getElementById("f1").innerHTML = 'Main Contents';
            document.getElementById("f2").innerHTML = 'Presentations';
            document.getElementById("f3").innerHTML = 'Articles';
            document.getElementById("f4").innerHTML = 'Courses';
            document.getElementById("f5").innerHTML = 'Designs';
            document.getElementById("f6").innerHTML = 'Social Media';
            document.getElementById("f7").innerHTML = 'Instagram';
            document.getElementById("f8").innerHTML = 'linkdIn';
            document.getElementById("f9").innerHTML = 'YouTube';
        }

    });
});