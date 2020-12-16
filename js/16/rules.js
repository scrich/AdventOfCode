// ^(\w*),(\d+)-(\d+),(\d+)-(\d+)$

// function validate_$1 (n) {\nreturn(($2<=n && n <= $3)||($4<=n && n <= $5))}\n




function validate_departurelocation(n) {
    return ((40 <= n && n <= 152) || (161 <= n && n <= 969))
}

function validate_departurestation(n) {
    return ((39 <= n && n <= 838) || (845 <= n && n <= 971))
}

function validate_departureplatform(n) {
    return ((39 <= n && n <= 209) || (217 <= n && n <= 970))
}

function validate_departuretrack(n) {
    return ((47 <= n && n <= 76) || (82 <= n && n <= 955))
}

function validate_departuredate(n) {
    return ((41 <= n && n <= 167) || (178 <= n && n <= 949))
}

function validate_departuretime(n) {
    return ((25 <= n && n <= 652) || (660 <= n && n <= 953))
}

function validate_arrivallocation(n) {
    return ((36 <= n && n <= 798) || (810 <= n && n <= 964))
}

function validate_arrivalstation(n) {
    return ((30 <= n && n <= 688) || (702 <= n && n <= 973))
}

function validate_arrivalplatform(n) {
    return ((44 <= n && n <= 248) || (268 <= n && n <= 969))
}

function validate_arrivaltrack(n) {
    return ((45 <= n && n <= 536) || (552 <= n && n <= 956))
}

function validate_class(n) {
    return ((29 <= n && n <= 751) || (760 <= n && n <= 951))
}

function validate_duration(n) {
    return ((40 <= n && n <= 912) || (934 <= n && n <= 971))
}

function validate_price(n) {
    return ((44 <= n && n <= 896) || (911 <= n && n <= 965))
}

function validate_route(n) {
    return ((32 <= n && n <= 582) || (590 <= n && n <= 953))
}

function validate_row(n) {
    return ((46 <= n && n <= 269) || (282 <= n && n <= 971))
}

function validate_seat(n) {
    return ((49 <= n && n <= 114) || (134 <= n && n <= 971))
}

function validate_train(n) {
    return ((37 <= n && n <= 395) || (401 <= n && n <= 969))
}

function validate_type(n) {
    return ((43 <= n && n <= 180) || (206 <= n && n <= 960))
}

function validate_wagon(n) {
    return ((41 <= n && n <= 462) || (480 <= n && n <= 953))
}

function validate_zone(n) {
    return ((35 <= n && n <= 411) || (427 <= n && n <= 960))
}
