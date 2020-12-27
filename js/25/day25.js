const DEBUG = true;

let card_subject_number = 7

let handshake = 1;
console.log(handshake);
// const card_pk = 5764801;
// const door_pk = 17807724;

const card_pk = 8987316;
const door_pk = 14681524;

let card_loop_size = find_loop_size(7, card_pk);
console.log("card_loop_size " + card_loop_size);

let door_loop_size = find_loop_size(7, door_pk);
console.log("door_loop_size " + door_loop_size);

// for (let i = 0; i < card_loop_size; i++) {
//     handshake *= card_subject_number;
//     handshake = handshake%20201227;
//     console.log(i, handshake);
// }

function transform_subject_number (subject_number, loop_size) {
    let handshake = 1;
    for (let i = 0; i < loop_size; i++) {
        handshake *= subject_number;
        handshake = handshake%20201227;
        //console.log(i, handshake);
    }
    return handshake;
}

// let card_pk = transform_subject_number(7,100);
// console.log("card_pk " + card_pk);

// let door_pk = transform_subject_number(7, 11);
// console.log("door_pk " + door_pk);

let encryption_key = transform_subject_number(door_pk, card_loop_size);
console.log("encryption_key " + encryption_key);

function find_loop_size (subject_number, pk) {
    let handshake = 1;
    let loop_size;
    for (let i = 0; i < 10000000; i++) {
        handshake *= subject_number;
        handshake = handshake%20201227;
        //console.log(i, handshake);
        if (handshake == pk) {
            loop_size = i+1;
            break;
        }
    }
    return loop_size;
}