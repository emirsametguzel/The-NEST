document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  // burdası ana sayfa için özleleştirilmiş bir js sayfası

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      // do this tr

      //1
      console.log("Checked");
      document.getElementById("metin1").innerHTML =
        "The Nest, STEAM ile ilgili tüm toplulukları ve bireyleri hedefleyen çok amaçlı bir web sitesidir. STEAM tutkunları arasındaki iletişimi ve bagları artırmayı hedeflerken aynı zamanda kaynaklar ve egitim sunan bir platform oluşturmayı amaçlar.";
      document.getElementById("h1").innerHTML = "The Nest";

      //2
      document.getElementById("me1").innerHTML =
        "The Nest herkese açk bir erğitim ağı sunuyor eğer sende bir içerik üretmek istiorsan makale, sunum, videoyada 3d görselleri bizimle paylaş, seninde the nest de katkın olsun";
      document.getElementById("hed1").innerHTML = "Eğitimlere katkıda bulun";

      //3
      document.getElementById("me2").innerHTML =
        "7611#AmalHawks takımının kurduğu The Nest Projesi, FRC topluluğunun herkesin faydalanabileceği bir kaynak olmasını hedefler. Bu proje, gençlerden mentorlara kadar herkesin ihtiyaç duyduğu bilgiye erişimini kolaylaştırır ve topluluk arasında işbirliğini teşvik eder. Amacı, FRC'nin erişilebilirliğini ve sürdürülebilirliğini artırmak, böylece daha fazla genç, STEM becerilerini geliştirme fırsatı bulabilir.";
      document.getElementById("hed2").innerHTML = "Kurucu takım";

      //3
      document.getElementById("me3").innerHTML =
        "Fikret Üksel Vakfı, FRC'ye (FIRST Robotics Competition) önemli katkılarda bulunarak gençlerin bilim, teknoloji, mühendislik ve matematik (STEM) alanlarında gelişimine destek olmaktadır. Vakıf, gençlerin STEM becerilerini geliştirmelerine ve yaratıcılıklarını ortaya koymalarına yardımcı olmak amacıyla FRC takımlarına maddi ve manevi destek sağlamaktadır. Bu destek, ekip mentörlüğü, ekip eğitimi, malzeme temini ve yarışma katılım masraflarını kapsamaktadır. Fikret Üksel Vakfı'nın FRC'ye katkısı, gençlerin gelecekteki kariyerlerine yönelik sağlam bir temel oluşturmalarına ve STEM alanında başarılı olmalarına yardımcı olmaktadır.";
      document.getElementById("hed3").innerHTML = "Fikret Yüksel Vakfı";

      document.getElementById("namei").placeholder = "Adınızı Girin";
      document.getElementById("teamNumber").placeholder =
        "Takım Numaranızı Girin";
      document.getElementById("additionalInfo").placeholder =
        "Eklemek İstediğiniz Bir Şey Varsa Buraya Yazın";
      document.getElementById("title").placeholder = "Başlık Girin";
      document.getElementById("fileUpload").placeholder = "Dosyanızın URL Adresini Girin";
      document.getElementById("namet").innerHTML = "Adınız:";
      document.getElementById("teamNumbert").innerHTML = "Takım Numaranız:";
      document.getElementById("additionalInfot").innerHTML = "Ek Bilgi:";
      document.getElementById("titlet").innerHTML = "Başlık:";
      document.getElementById("uploadt").innerHTML =
        "Yüklemek İstediğiniz Dosyanın Adresi(Google Drive, DropBox vb.):";
      document.getElementById("dilt").innerHTML = "İçeriğin Dili:";
      document.getElementById("end").innerHTML =
        "Formu Gönderdikten sonra aşağıdaki mail ile iletişime geçin:";
      document.getElementById("0").innerHTML = "Tür:";
      document.querySelector('#label1').lastChild.textContent = " Sunum";
      document.querySelector('#label2').lastChild.textContent = " Video";
      document.querySelector('#label3').lastChild.textContent = " 3D Model";
      document.querySelector('#label4').lastChild.textContent = " Makale";
      document.querySelector('#label5').lastChild.textContent = " Haberler";
      document.querySelector('#label6').lastChild.textContent = " Diğer";     
      document.getElementById("button").innerHTML = "Gönder";

      // header

      document.getElementById("he1").innerHTML = "Takımımız";
      document.getElementById("he2").innerHTML = "İçerikler";
      document.getElementById("he3").innerHTML = "Egitimler";
      document.getElementById("he4").innerHTML = "Makaleler";
      document.getElementById("he5").innerHTML = "Sunumlar";
      document.getElementById("he6").innerHTML = "Tasarımlar";
      document.getElementById("he7").innerHTML = "Haberler";

      //footer

      document.getElementById("f1").innerHTML = "Eğitim Sayfaları";
      document.getElementById("f2").innerHTML = "Sunumlar";
      document.getElementById("f3").innerHTML = "Makaleler";
      document.getElementById("f4").innerHTML = "Egitimler";
      document.getElementById("f5").innerHTML = "Objeler";
      document.getElementById("f6").innerHTML = "Sosyal Medya";
      document.getElementById("f7").innerHTML = "Instagram";
      document.getElementById("f8").innerHTML = "linkdIn";
      document.getElementById("f9").innerHTML = "YouTube";
    } else {
      // do that en
      console.log("Not checked");
      document.getElementById("metin1").innerHTML =
        " The Nest, is a multifunctional website that addresses all communities and individuals from any age group related to STEAM. It focuses on creating a platform that increases communication and bonds between STEAM enthusiasts while also providing resources and education.";
      document.getElementById("h1").innerHTML = "The Nest";

      //2
      document.getElementById("hed1").innerHTML = "Contribute to trainings.";
      document.getElementById("me1").innerHTML =
        "The Nest offers an open education network for everyone. If you d like to contribute content such as articles, presentations, videos, or 3D visuals, share them with us, and let your";
      (" contribution be a part of The Nest too.");

      //3
      document.getElementById("me2").innerHTML =
        "The Nest Project, established by Team 7611#AmalHawks, aims to be a resource accessible to everyone in the FRC community. This project facilitates access to the information needed by everyone from youth to mentors and encourages collaboration within the community. Its goal is to increase the accessibility and sustainability of FRC, thereby providing more young people with opportunities to develop STEM skills.";
      document.getElementById("hed2").innerHTML = "The founder team";

      //4
      document.getElementById("me3").innerHTML =
        "The Fikret Üksel Foundation supports the development of young people in the fields of science, technology, engineering, and mathematics (STEM) by making significant contributions to the FIRST Robotics Competition (FRC). The foundation provides financial and moral support to FRC teams with the aim of helping young people develop their STEM skills and showcase their creativity. This support includes team mentoring, training, material provision, and covering competition participation expenses. The contribution of the Fikret Üksel Foundation to FRC helps young people build a solid foundation for their future careers and succeed in the field of STEM.";
      document.getElementById("hed3").innerHTML = "The Fikret Yüksel Foundation";

      document.getElementById("namei").placeholder = "Enter Your Name";
      document.getElementById("teamNumber").placeholder =
        "Enter Your Team Number";
      document.getElementById("additionalInfo").placeholder =
        "If You Want To Add Something, Write Down Here";
      document.getElementById("title").placeholder = "Enter Title";
      document.getElementById("fileUpload").placeholder = "Enter The URL Of The File";
      document.getElementById("namet").innerHTML = "Name:";
      document.getElementById("teamNumbert").innerHTML = "Team Number:";
      document.getElementById("additionalInfot").innerHTML =
        "Additional Information:";
      document.getElementById("titlet").innerHTML = "Title:";
      document.getElementById("dilt").innerHTML = "Language Of The Document:";

      document.getElementById("end").innerHTML =
        "Please contact with the email below after you send the form.";
      document.getElementById("uploadt").innerHTML = "URL Of The File You Want To Upload(Google Drive, DropBox etc.):";
      document.getElementById("0").innerHTML = "Type:";
      document.querySelector('#label1').lastChild.textContent = " Presentation";
      document.querySelector('#label2').lastChild.textContent = " Video";
      document.querySelector('#label3').lastChild.textContent = " 3D Model";
      document.querySelector('#label4').lastChild.textContent = " Article";
      document.querySelector('#label5').lastChild.textContent = " News";
      document.querySelector('#label6').lastChild.textContent = " Other";        
      document.getElementById("button").innerHTML = "Send";
      //header

      document.getElementById("he1").innerHTML = "Our Team";
      document.getElementById("he2").innerHTML = "Contents";
      document.getElementById("he3").innerHTML = "Courses";
      document.getElementById("he4").innerHTML = "Articles";
      document.getElementById("he5").innerHTML = "Presentations";
      document.getElementById("he6").innerHTML = "Designs";
      document.getElementById("he7").innerHTML = "News";

      //footer

      document.getElementById("f1").innerHTML = "İnformation";
      document.getElementById("f2").innerHTML = "Presentations";
      document.getElementById("f3").innerHTML = "Articles";
      document.getElementById("f4").innerHTML = "Courses";
      document.getElementById("f5").innerHTML = "Designs";
      document.getElementById("f6").innerHTML = "Social Media";
      document.getElementById("f7").innerHTML = "Instagram";
      document.getElementById("f8").innerHTML = "linkdIn";
      document.getElementById("f9").innerHTML = "YouTube";
    }
  });        
});