import Swal from "sweetalert2"

export function showMessage(type, iconColor = '#020024', title, text, cancelButtonColor = "#b53737", confirmButtonColor = "#020024", confirmButtonText = "Okay") {
    Swal.fire({
        icon: type,
        iconColor: iconColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonColor: confirmButtonColor,
        confirmButtonText: confirmButtonText,
        title: title,
        text: text,
        footer: '<a href="">Contact administration.</a>'
    })
}