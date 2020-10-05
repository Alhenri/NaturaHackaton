import React from 'react'
import PageDefault from '../PageDefault'

// Usei uma div pra tirar eles do efeito di header
function NotFound(){
    return(
      <PageDefault>
        <h1>Page not found</h1>
        <h2>Error 404!</h2>
      </PageDefault>
    )
}

export default NotFound;