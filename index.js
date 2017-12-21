const express        = require('express')
const hbs            = require('express-handlebars')
const candidates     = require('./controllers/candidates')
const parser         = require('body-parser')
const app            = express()
const methodOverride = require('method-override')

app.set('port', process.env.PORT || 3001)
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname:        '.hbs',
  partialsDir:    'views/',
  layoutsDir:     'views/',
  defaultLayout:  'layout-main'
}))
app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))
app.use('/assets', express.static('public'))


app.get('/', (req, res) => {
  res.render('app-welcome')
})

app.use('/candidates', candidates)

app.listen(app.get('port'), () => {
  console.log('It\'s aliiive!')
})
