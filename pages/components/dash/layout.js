import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
  <div>
    <Head>
      <title>TMS Admin Dash</title>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
      <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>

      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content=""/>
      <meta name="author" content=""/>


      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=7n4pgaenq0c1yebrsoqx6abawypff4xntpvpt6bltthedfet"></script>

      {/* <script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script> */}
      {/* <script>tinymce.init({ selector:'textarea' });</script> */}

    </Head>
    {/* <Navbar/> */}
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
);
export default Layout;