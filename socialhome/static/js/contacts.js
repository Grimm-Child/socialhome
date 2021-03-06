$(document).ready(function() {
    window.SocialhomeContacts = {
        addFollowUnfollowTriggers: function() {
            $(".follower-button").off("click", SocialhomeContacts.followUnfollow)
                .click(SocialhomeContacts.followUnfollow);
        },

        followUnfollow: function(ev) {
            var $elem = $(ev.currentTarget);
            var targetUuid = $elem.data("target");
            $.post({
                url: "/api/profiles/" + targetUuid + "/" + $elem.data("action") + "/",
                success: function () {
                    $(".follower-button[data-target='" + targetUuid + "']").toggleClass("hidden");
                },
                headers: { "X-CSRFToken": Cookies.get('csrftoken') },
            });
        },
    };

    if (typeof socialhomeStream === "undefined") {
        SocialhomeContacts.addFollowUnfollowTriggers();
    }
});
