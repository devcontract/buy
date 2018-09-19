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
  <title>Refund</title>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="/dashboard/css/master.css">
  <link rel="stylesheet" href="/dashboard/css/navBar.css">
  <link rel="stylesheet" href="/refund/css/table.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/dashboard/js/navigationBar.js" async></script>

  <script type="module" src="./js/index.js" async></script>

</head>

<body>

  <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="/dashboard/index.php"><span class="glyphicon glyphicon-home iconSize"> </span> Dashboard</a>
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

      <li><a href="../withdrawal/index.php" class="subMenuText" >Token Withdrawal</a></li>
      <li><a href="index.php" class="subMenuText" >Ether Refund</a></li>


      </li>

    </ul>


    <a href="#ReferralSubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble"> <span class="glyphicon glyphicon-share-alt iconSize"></span> Referral</a>
    <ul class="collapse list-unstyled" id="ReferralSubMenu">
      <li><a href="#" class="subMenuText" > Affilate History</a></li>
    </ul>



    <a href="#SettingsSubMenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle collapseble"> <span class="glyphicon glyphicon-cog iconSize"> </span> Settings</a>
    <ul class="collapse list-unstyled" id="SettingsSubMenu">
      <li> <a href="/settings/general/index.php" class="subMenuText" > General Setting </a> </li>
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
        <div class="block" style="height:auto">
          <h2 class="text-center">Ether Refund</h2>

          <div class="" style="margin:40px 0;width:620px;display:flex;justify-content:space-between;">
            <div class="input-group" style="margin-left:28px;">
              <input type="text" class="form-control" style="text-align:left;" value="1" aria-describedby="basic-addon2" id="inputAmount" readonly>
              <span class="input-group-addon" style="text-align: left; width: 44px; height: 34px;" id="basic-addon2"><span class="text-center currencyName"></span></span>
            </div>
            <div id="" class="">
              <a href="" class="btn btn-lg myBtn" type="button" name="" id="refund-myetherwallet" style="width:125px;height:34px;font-size:10px;margin-right:10px">MYETHERWALLET </a>
              <a href="" class="btn btn-lg myBtn" type="button" name="" id="refund-metamask" style="width:125px;height:34px;font-size:10px;">METAMASK </a>
            </div>


          </div> <!--refund top part end-->
<div class="" style="display:flex;justify-content:center">
  <div class="" style="width:600px;border-bottom:4px double #00BEA3;margin:40px 0 5px 0"></div>
</div>
<h2 class="text-center">Ether Refund History</h2>

<div class="historyTable">

  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col" class="tableSmallFont text-center" >#</th>
        <th scope="col" class="tableSmallFont text-center" >Time Stamp</th>
        <th scope="col" class="tableSmallFont text-center"  style="text-align:center">TxHash</th>
        <th scope="col" class="tableSmallFont text-center" >Gas Price</th>
        <th scope="col" class="tableSmallFont text-center" >Gas Used</th>
        <th scope="col" class="tableSmallFont text-center" >ETH Amount</th>
      </tr>
    </thead>
    <tbody id="tbody">

    </tbody>
  </table>
</div>
        </div> <!--end of block-->
      </div>
    </div>
  </div>
</body>

</html>
