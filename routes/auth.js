/* rutas de usuarios/ auth
    host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();
const { validarCampos } = require('../middlewares/validar-campos');
const {validarJWT} =require('../middlewares/validaer-jwt');

const {crearUsuario, 
       loginUsuario,
       revalidarToken
      } = require('../controllers/auth');

//para crear un nuevo usuario es usar el POST
router.post('/new',
                    [//*middleware
                    check('name','El nombre es obligatorio').not().isEmpty(),
                    check('email','El email es obligatorio').isEmail(),
                    check('password',
                    'El password debe ser de 6 caracteres').isLength({min:6}),
                    validarCampos
                    ], 
        crearUsuario );

router.post('/', 
             [
                //*middleware
                check('email','El email es obligatorio').isEmail(),
                check('password',
                'El password debe ser de 6 caracteres').isLength({min:6}),
                validarCampos
             ],
            loginUsuario );

router.get('/renew',validarJWT,revalidarToken );

//la exportación en node es:
module.exports = router;