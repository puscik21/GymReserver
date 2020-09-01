import React from "react";
import { Button, Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

function Cover() {
    const Styles = styled.div `
    
    /* Links */
    a,
    a:focus,
    a:hover {
      color: #fff;
    }

    /* Custom default button */
    .btn-secondary,
    .btn-secondary:hover,
    .btn-secondary:focus {
      color: #333;
      text-shadow: none; /* Prevent inheritance from \`body\` */
      background-color: #fff;
      border: .05rem solid #fff;
    }
    
    
    /*
     * Base structure
     */
    html, body {
      //height: 1000px;
      height: 100vh;
      background-color: #333;
      margin: 0;
      overflow: hidden;
      //margin-bottom: 0 !important;
    }
    
   body {
     display: -ms-flexbox;
     display: -webkit-box;
     display: flex;
     -ms-flex-pack: center;
     -webkit-box-pack: center;
     justify-content: center;
     color: #fff;
     text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
     box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
   }

   .cover-container {
     max-width: 42em;
   }


   /*
    * Header
    */
   .masthead {
     margin-bottom: 2rem;
   }

   .masthead-brand {
     margin-bottom: 0;
   }

   .nav-masthead .nav-link {
     padding: .25rem 0;
     font-weight: 700;
     color: rgba(255, 255, 255, .5);
     background-color: transparent;
     border-bottom: .25rem solid transparent;
   }

   .nav-masthead .nav-link:hover,
   .nav-masthead .nav-link:focus {
     border-bottom-color: rgba(255, 255, 255, .25);
   }

   .nav-masthead .nav-link + .nav-link {
     margin-left: 1rem;
   }

   .nav-masthead .active {
     color: #fff;
     border-bottom-color: #fff;
   }

   @media (min-width: 48em) {
     .masthead-brand {
       float: left;
     }
     .nav-masthead {
       float: right;
     }
   }


   /*
    * Cover
    */
   .cover {
     padding: 0 1.5rem;
   }
   .cover .btn-lg {
     padding: .75rem 1.25rem;
     font-weight: 700;
   }


   /*
    * Footer
    */
   .mastfoot {
     color: rgba(255, 255, 255, .5);
  }
`;

    return (
        <Styles>
            <body className="text-center">
                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand">Cover</h3>
                            <nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link active" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Contact</a>
                            </nav>
                        </div>
                    </header>

                    <main className="inner cover">
                        <h1 className="cover-heading">Cover your page.</h1>
                        <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download,
                            edit the text, and add your own fullscreen background photo to make it your own.</p>
                        <p className="lead">
                            <Button variant="light">
                                <Nav.Link href="/main" style={{color: '#333', fontWeight: '500'}}>Home</Nav.Link>
                            </Button>
                        </p>
                    </main>

                    <footer className="mastfoot mt-auto">
                        <div className="inner">
                            <p>Nice cover page took from <a href="https://getbootstrap.com/">Bootstrap</a> website.</p>
                        </div>
                    </footer>
                </div>
            </body>
        </Styles>
    )
}
export default Cover