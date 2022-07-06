function getAdmin (map) {
    let admins = [];
    let rh = [];
    let ti = [];

    for ([key, value] of map) {
        if (value === 'Adm') {
            admins.push(key);
        }
        if (value === 'RH') {
            rh.push(key);
        }
        if (value === 'TI') {
            ti.push(key);
        }
    }
    return admins, rh, ti;
}

const usuario = new Map();

usuario.set('Gil', 'Adm');
usuario.set('Vânia', 'Adm');
usuario.set('Roberta', 'Adm');
usuario.set('Gerson', 'RH');
usuario.set('Cleiton', 'Adm');
usuario.set('João', 'RH');
usuario.set('Maria', 'TI');
usuario.set('Billy', 'CEO');
usuario.set('Jack', 'TI');
usuario.set('Ferdinando', 'TI');
usuario.set('Gisele', 'RH');
usuario.set('Júlia', 'RH');

console.log(getAdmin(usuario));
console.log(usuario);