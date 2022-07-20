    //pre loader
    window.addEventListener("load", function() {
        var loadScreen = document.querySelector("#pre_loader");
        document.body.removeChild(loadScreen);
    });
    //pre loader end
    $(document).ready(function() {
        //back to top button
        var btn = $('#back_to_top_button');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                btn.fadeIn();
            } else {
                btn.fadeOut();
            }
        });
        btn.click(function() {
            $('html').animate({
                scrollTop: 0
            }, 'slow');
        });
        //back to top button end

        //sticky nav bar
        function dropdow_menu(title_id_forward, title_id_back, sub_title_id) {
            $(title_id_forward).mouseenter(
                function() {
                    $(sub_title_id).slideDown("fast");
                }
            );
            $(title_id_back).mouseleave(
                function() {
                    $(sub_title_id).slideUp("fast");
                }
            );
        }

        var menu_titles = ['home', 'properties', 'agents', 'blog', 'pages'];
        for (let index = 0; index < menu_titles.length; index++) {
            dropdow_menu("#title_" + menu_titles[index], "#" + menu_titles[index] + "_section", "#sub_" + menu_titles[index]);
        }

        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $("#sticky_nav").css('top', '0');
            } else if ($(window).scrollTop() < 50) {
                $("#sticky_nav").css('top', 'auto');
            }
        });
        //sticky nav bar end
        //responsive sticky nav bar

        function rsp_dropdow_menu(title_id_forward, title_id_back, sub_title_id) {
            $(title_id_forward).mouseenter(
                function() {
                    $(sub_title_id).slideDown("fast");
                }
            );
            $(title_id_back).mouseleave(
                function() {
                    $(sub_title_id).slideUp("fast");
                }
            );
        }

        var rsp_menu_titles = ['home', 'properties', 'agents', 'blog', 'pages'];
        for (let index = 0; index < rsp_menu_titles.length; index++) {
            rsp_dropdow_menu(".rsp_menue #title_" + rsp_menu_titles[index], ".rsp_menue #" + rsp_menu_titles[index] + "_section", ".rsp_menue #sub_" + rsp_menu_titles[index]);
        }

        $(".rsp_menu_icon i").click(function() {
            $("#rsp_sticky_navbar").fadeIn();
        });
        $(".close_area #close_btn").click(function() {
            $("#rsp_sticky_navbar").fadeOut();
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $("#rsp_sticky_navbar").css("margin-top", "-88px");
            } else if ($(window).scrollTop() < 50) {
                $("#rsp_sticky_navbar").css("margin-top", "0");
            }
        });
        //responsive sticky nav bar
    });