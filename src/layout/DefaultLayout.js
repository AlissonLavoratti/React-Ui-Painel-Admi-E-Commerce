import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />                                        {/*  BARRA LATERAL */}
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />                                       {/*  CABEÇALHO */}
        <div className="body flex-grow-1">
          <AppContent />                                    {/*  BODY */}
        </div>
        <AppFooter />                                       {/*  FOOTHER */}
      </div>
    </div>
  )
}

export default DefaultLayout
