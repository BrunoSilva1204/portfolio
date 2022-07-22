<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">

  </head>
<body>

<!------------------------------------>
<header class="main-header">
    <div class="container">
      <nav class="navbar navbar-expand-lg main-nav px-0">
        <a class="navbar-brand" href="./index.php">Codimarc</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar icon-bar-1"></span>
                        <span class="icon-bar icon-bar-2"></span>
                        <span class="icon-bar icon-bar-3"></span>
                    </button>
        <div class="collapse navbar-collapse" id="mainMenu">
          <ul class="navbar-nav ml-auto text-uppercase f1">
            <li>
              <a href="#home" class="active active-first">Calcular etiquetas</a>
            </li>
            <!--<li>
              <a href="#about">about us</a>
            </li>
            <li>
              <a href="#service">services</a>
            </li>
            <li>
              <a href="#project">projects</a>
            </li>
            <li>
              <a href="#team">team</a>
            </li>
            <li>
              <a href="#testimony">testimonils</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>-->
          </ul>
        </div>
      </nav>
    </div>
    <!-- /.container -->
  </header>
<!------------------------------------>

<div class="container my_container">
    <form>
        <div class="row">
            <div class="mb-5 col-4">
              <label class="form-label">Total etiquetas</label>
              <input type="number" class="form-control" id="total_etiquetas" value="1000">
            </div>
            <div class="mb-5 col-4">
              <label class="form-label">Total vias do cortante</label>
              <input type="number" class="form-control" id="vias_cortante" value="5">
            </div>
        </div>
        <div class="row">
            <div class="mb-5 col-4">
              <label class="form-label secret">Vias de rolo</label>
              <input type="number" class="form-control" id="vias_rolo" value="1">
            </div>
            <div class="mb-5 col-4">
              <label class="form-label">Quantidade rolo</label>
              <input type="number" class="form-control" id="quantidade_por_rolo" value="200">
            </div>
            <div class="mb-5 col-4">
              <label class="form-label">Metros por rolo</label>
              <input type="number" class="form-control" id="metros_por_rolo" value="100">
            </div>
        </div>
        <div class="row">
            <a type="submit" class="btn btn-primary btn_codimarc" onclick="calcular_etiquetas()">Calcular</a>
        </div>
    </form>
</div>

<div class="container my_container" id="mostrar_resultado"></div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
<script src="./js/javascript.js" crossorigin="anonymous"></script>

</body>
</html>