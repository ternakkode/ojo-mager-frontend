function sucessAlertWithTimer(message) {
    return Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: message,
        showConfirmButton: false,
        timer: 1000
    });
}

function sucessAlertWithConfirmationButton(message) {
    
}

function unexpectedErrorAlert() {

}

function customErrorAlert(message) {
    return Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: message,
    });
}