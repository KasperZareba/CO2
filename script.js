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
        ],
        responsive: true,
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
             "<'row'<'col-sm-12'tr>>" +
             "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        lengthChange: false, // Wyłączenie opcji "Show X entries"
        info: false, // Wyłączenie informacji "Showing X to X of X entries"
        paging: false // Wyłączenie przycisków "Previous" i "Next"
    });
});
