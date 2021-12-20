<template>
    <footer>
    <div class="footer">
        <div class="container">
            <div class="brand">
                <div class="logo_compinfo">
                    <a href="#">BRAN<span>D</span></a>
                </div>
                <p>Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go&nbsp;forward benefits. Intrinsicly syndicate an&nbsp;expanded array of&nbsp;processes and cross-unit partnerships. </p>
                <p>Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.</p>
            </div>
            <div class="company_info_nav">
                <nav class="col_link">
                    <h3>COMPANY</h3>
                    <a href="#">Home </a><br>
                    <a href="#">Shop</a><br>
                    <a href="#">About</a><br>
                    <a href="#">How It Works</a><br>
                    <a href="#">Contact</a><br>
                </nav>
                <nav class="col_link">
                    <h3>INFORMATION</h3>
                    <a href="#">Tearms &amp;Condition</a><br>
                    <a href="#">Privacy Policy</a><br>
                    <a href="#">How to Buy</a><br>
                    <a href="#">How to Sell</a><br>
                    <a href="#">Promotion</a><br>
                </nav>
                <nav class="col_link">
                    <h3>SHOP CATEGORY</h3>
                    <a href="#">Men</a><br>
                    <a href="#">Women</a><br>
                    <a href="#">Child</a><br>
                    <a href="#">Apparel</a><br>
                    <a href="#">Brows All</a><br>
                </nav>
            </div>
        </div>
    </div>
        <social></social>
    </footer>
</template>

<script>
    import social from "./SocialFooter";

    export default {
        name: "Main",
        components:{
            social: social,
        }
    }
</script>

<style scoped>

</style>
