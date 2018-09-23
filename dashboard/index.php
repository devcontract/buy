
<?php
require "../php/db.php"
?>
<?php if(isset($_SESSION['logged_user']) ) : /* checking if user already authorised  and if yes then*/ ?>

<?php else : ?>
<?php header('Location: /') ?>
<?php endif; ?>


<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Dashboard</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="./css/master.css">
  <link rel="stylesheet" href="./css/navBar.css">
  <link rel="stylesheet" href="./css/timer.css">
  <link rel="stylesheet" href="./css/statusBarBlock.css">
  <link rel="stylesheet" href="./css/responsiveProgressBar.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <script type="module" src="./js/index.js" async></script>
  <script type="text/javascript" src="./js/navigationBar.js" async></script>


</head>

<body>

  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="#"><span class="glyphicon glyphicon-user iconSize"> </span> Hello , <?php echo $_SESSION['logged_user']; ?> !</a>
    <a href="index.php"><span class="glyphicon glyphicon-home iconSize"> </span> Dashboard</a>
    <a href="#IcoSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble "> <span class="glyphicon glyphicon-certificate iconSize"> </span> ICO</a>
    <ul class="collapse list-unstyled" id="IcoSubmenu">
      <li>
        <a href="/ico/purchase_token/index.php" class="subMenuText">Purchase Token</a>
      </li>
      <li>
        <a href="/ico/purchase_history/index.php" class="subMenuText" >Purchase History</a>
      </li>
    </ul>

    <a href="#WalletSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble"> <span class="glyphicon glyphicon-qrcode iconSize"> </span> Wallet</a>
    <ul class="collapse list-unstyled" id="WalletSubmenu">

      <li>

      <li><a href="/withdrawal/index.php" class="subMenuText" >Token Withdrawal</a></li>
      <li><a href="/refund/index.php" class="subMenuText" >Ether Refund</a></li>


      </li>

    </ul>


    <a href="#ReferralSubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble"> <span class="glyphicon glyphicon-share-alt iconSize"></span> Referral</a>
    <ul class="collapse list-unstyled" id="ReferralSubMenu">
      <li><a href="#" class="subMenuText" > Affilate History</a></li>
    </ul>



    <a href="#SettingsSubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble"> <span class="glyphicon glyphicon-cog iconSize"> </span> Settings</a>
    <ul class="collapse list-unstyled" id="SettingsSubMenu">
      <li> <a href="/settings/general/index.php" class="subMenuText" > General Setting </a> </li>
      <li> <a href="/settings/logs/logs.php" class="subMenuText" > Logs </a> </li>
      <li> <a href="#" class="subMenuText" > Reset Password </a> </li>
      <li> <a href="#" class="subMenuText" > Security </a> </li>
      <li> <a href="#" class="subMenuText" > Login History </a> </li>
    </ul>

    <a href="/php/logout.php"> <span class="glyphicon glyphicon-log-out iconSize" ></span> LogOut</a>
  </div>

  <div id="main">

    <span style="font-size:30px;cursor:pointer;position:fixed;" onclick="openNav()" id="openNavBtn">&#9776;</span>
    <div class="container">
      <!-- timer block -->
      <div class="row">
        <div class="block" style="">
          <div class="text-center">
            <h2>Sale is <span id="saleStatus"></span></h2>

          </div>
          <div class="container-fluid">
            <div class="ciferblate">
              <div class="timerSquare shadowEffect" id="days"></div>
              <div class="tim">:</div>
              <div id="hours" class="timerSquare shadowEffect"></div>
              <div class="">:</div>
              <div id="minutes" class="timerSquare shadowEffect"></div>
              <div class="">:</div>
              <div id="seconds" class="timerSquare shadowEffect"></div>
            </div>

            <div class="timerLabels">
              <div class="timerLabelWindow">Days</div>
              <div class="timerLabelWindow">Hours</div>
              <div class="timerLabelWindow">Minutes</div>
              <div class="timerLabelWindow">Seconds</div>
            </div>
          </div>
        </div>
      </div>
      <!--end of timer block row-->



      <div class="row">
        <div class="block" style="height:auto;">
          <h2 class="text-center">ICO Status</h2>

          <div class="container-fluid" style="margin:50px 26px 50px 20px;">
            <div id="stageBar" class="row">

              <ol style="" class="progress-bar-">
                <li class="progress-bar__steps not-current;" style="">
                  <span class="" style="margin-left:40px" id="sale-type-1"></span>
                </li>
                <li class="progress-bar__steps not-current">
                  <span class="" style="margin-left:20px" id="sale-type-2"></span>
                </li>

                <li class="progress-bar__steps current" style="width:37%">
                  <span class="" style="margin-left:20px" id="sale-type-3"></span>
                </li>
              </ol>

            </div>
          </div>
          <!--end of responsiveStepBar-->

          <div class="statusBarBlock">

            <div class="dashboardLabels" style="margin-top:40px;">
              <div>Raised : <span id="raised">  </span> <span class="cryptoCurrencyName"></span> <span id="eth_convert_raised"></span></div>
              <div>Token Sold: <span id="tokensold">  </span> <span class="tokenName"></span> </div>
            </div>

            <div style="margin-top:1px;display:flex;align-items:center;justify-content:center;">

              <div class="progress " style="width:600px;border:1px none black; background-color:lightgrey;height:10px;margin-bottom:0px">
                <div id="dashboardProgressBar" class="progress-bar progBar" style="background-color:#00bea3;"> <span id="pbarOutput"style=""></span> </div>
              </div>

            </div>

            <div class="dashboardLabels">
              <div>Soft Cap: <span id="softCap" > </span> <span class="cryptoCurrencyName" > </span> <span id="eth_convert_soft"></span></div>
              <div>Hard Cap: <span id="hardCap" > </span> <span class="cryptoCurrencyName" > </span> <span id="eth_convert_hard"></span></div>
            </div>

          </div>
          <!--End of statusBarBlock-->

          <div class="container" style="margin:40px 10px;">
            <span>TOKENS PER <span class="cryptoCurrencyName"> </span> : </span>

            <div class="" style="width:600px;border-bottom:4px double #00BEA3;margin:10px 0"></div>
            <div class="" style="width: 620px;display:flex;justify-content:space-between">
              <div class="">
                <span id="">1</span><span class="cryptoCurrencyName"> </span> = <span id="standartPrice"></span><span class="tokenName"></span>
              </div>
              <div class="" style="margin-right:18px">
                <img style="" src="./img/present.png" alt="present"><br>
             </div>
            </div>
            <div class="" style="width:620px;display:flex;justify-content:space-between">
              <div class=""></div>
              <div class="" style="margin-right:25px;">
                <span id="bonusPresent" style="font-size:20px"></span> <span class="tokenName" style="font-size:20px"></span>
              </div>
            </div>
            <a  href="/ico/purchase_token/index.php" class="deactivate"> <button id="purchaseTokenButton" type="button" class="btn btn-lg myBtn deactivate" style="margin:0 0 10px 0">Purchase Token</button></a>

          </div>

        </div> <!--end of block-->
      </div> <!--end of row-->



    </div>
    <!--end of container-->

<button type="button" name="button" id="showme"></button>
  </div> <!-- end of main div-->


<script type="text/javascript">
$("#showme").click(function(){
var cookie = document.cookie;
alert(cookie);
})
</script>
</body>

</html>
