// Function to escape HTML
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

$(document).ready(function() {
    $('#myTable').DataTable({
        columns: [
            { title: "Land" },
            { title: "Firma" },
            { title: "Co2 - Produziert" },
            { title: "Co2 - Alarm" }
        ],
        data: [
            ["Polen", "PGE", "245", "NEIN"],
            ["Polen", "Energa", "275", "NEIN"],
            ["Polen", "Fiat", "1275", "JA"],
            ["Deutschland", "Siemens", "292", "NEIN"],
            ["Tschechien", "Skoda", "892", "JA"],
            ["Frankreich", "Citroen", "1292", "JA"],
            ["Frankreich", "Franc", "1092", "JA"],
            ["Tschechien", "Budwaiser", "692", "JA"],
            ["Deutschland", "Bombardier", "192", "NEIN"]
        ].map(row => row.map(cell => escapeHtml(cell))), 

        responsive: true,
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        lengthChange: false,
        info: false,
        paging: false
    });

    // Dynamic direction setting
    const lang = document.documentElement.lang;
    const navbarContainer = document.getElementById('navbar-container');
    if (lang === 'ar' || lang === 'he') {
        navbarContainer.dir = 'rtl';
    } else {
        navbarContainer.dir = 'ltr';
    }
});
