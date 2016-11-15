/**
 * Created by User on 10/2/2016.
 */

(function(){
    //Alert button behavior
    var dashboardAlert = document.getElementById("dashboardAlert");
    var notifyAlert = document.getElementById("notify");
    var alertButton = document.getElementById("alertButton");

    alertButton.onclick = removeAlert;

    function removeAlert() {
        dashboardAlert.parentNode.removeChild(dashboardAlert);
        notifyAlert.parentNode.removeChild(notifyAlert);
    }

}());