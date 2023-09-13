const { response } = require('express')


const usuariosGet = (req, res = response) => {

    res.json({ ok: 'Get' });

}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({  nombre, edad });

}
const usuariosPut = (req, res = response) => {

        const {id, idSup} = req.params

        console.log(id, idSup)

    res.json({ ok: 'Put' });

}
const usuariosPatch = (req, res = response) => {

    res.json({ ok: 'PAtch' });

}
const usuariosDelete = (req, res = response) => {

    res.json({ ok: 'Delete' });

}





module.exports = {

    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}

