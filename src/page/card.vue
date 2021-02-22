<template>
    <div id="root">
        <div  v-loading="loading"  element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB" style="height: 100vh; padding-top: 8px;">
                    <a class="CardTemplateIndex__CardTemplateWrapper-sc-14214yf-0 kPDrbV" v-for="(item,index) in cardList"
                       >
                        <div class="CardTemplateComponent__CardWrapper-sc-1slov8k-0 gEySWP">
                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate" style="background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;" v-if="item.CradImgURL == ''">
<!--                                <div class="inner-wrapper">-->
<!--                                    <div class="card-information">-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 1">{{item.MemberCardinfo.yxdays}}天{{item.MemberCardinfo.Kynumber}}次</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 2">{{item.MemberCardinfo.Kynumber}}次不限期</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 3">{{item.MemberCardinfo.yxdays}}天不限次</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 4">{{item.MemberCardinfo.Amount}}元不限期</div>-->
<!--                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>-->
<!--                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                    </div>-->
<!--                                    <div class="money-and-count"><span-->
<!--                                        class="card-money">￥{{item.MemberCardinfo.SellingPrice}}</span>-->
<!--                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
                            </section>
                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate" :style="{backgroundImage:'url(' + item.CradImgURL + ')', backgroundRepeat:'no-repeat'}"v-else>
<!--                                <div class="inner-wrapper">-->
<!--                                    <div class="card-information">-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 1">{{item.MemberCardinfo.yxdays}}天{{item.MemberCardinfo.Kynumber}}次</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 2">{{item.MemberCardinfo.Kynumber}}次不限期</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 3">{{item.MemberCardinfo.yxdays}}天不限次</div>-->
<!--                                        <div class="card-name fontBold" v-if="item.CardType == 4">{{item.MemberCardinfo.Amount}}元不限期</div>-->
<!--                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>-->
<!--                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                    </div>-->
<!--                                    <div class="money-and-count"><span-->
<!--                                        class="card-money">￥{{item.MemberCardinfo.SellingPrice}}</span>-->
<!--                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
                            </section>
                            <div class="CardTemplateComponent__CardTemplateTextWrapper-sc-1slov8k-2 jzSyzs">
                                <h3><span class="name multiLine line-2">{{item.CardName}}</span></h3>
                                <p v-if="item.CardType == '1' ">有效期：{{item.OverdueTime}}</p>
                                <p v-if="item.CardType == '1' ">可用次数：{{item.CardNumber}}</p>
                                <p v-if="item.CardType == '2' ">有效期：不限期</p>
                                <p v-if="item.CardType == '2' ">可用次数：{{item.CardNumber}}</p>
                                <p v-if="item.CardType == '3' ">有效期：{{item.OverdueTime}}</p>
                                <p v-if="item.CardType == '3' ">可用次数：不限次数</p>
                                <p v-if="item.CardType == '4' ">有效期：{{item.OverdueTime}}</p>
                                <p v-if="item.CardType == '4' ">可用金额：{{item.Amount}}</p>
                                <span class="CardTemplateComponent__CardTemplatePrice-sc-1slov8k-1 dkRCIX" v-if="item.CardType == 4">￥{{item.MemberCardinfo.SellingPrice}}</span>
                                <span class="CardTemplateComponent__CardTemplatePrice-sc-1slov8k-1 dkRCIX" v-else>￥{{item.PurchaseAmount}}</span>
                            </div>
<!--                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU" v-if="item.CradImgURL == ''"-->
<!--                                     style=" background: url(../../static/images/redstyle/card2bg.png) 0% 0% / cover, linear-gradient(303.69deg, rgb(135, 164, 206) 0%, rgb(143, 178, 226) 49.95%, rgb(171, 198, 232) 100%);">-->
<!--                                <div class="inner-wrapper">-->
<!--                                    <div class="card-information">-->
<!--                                        <div class="card-name fontBold">{{item.CardName}}</div>-->
<!--                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>-->
<!--                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                    </div>-->
<!--                                    <div class="money-and-count"><span-->
<!--                                        class="card-money">￥{{item.SellingPrice}}</span>-->
<!--                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </section>-->
<!--                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU" v-else-->
<!--                                     :style="{backgroundImage:'url(' + item.CradImgURL + ')', backgroundRepeat:'no-repeat'}">-->
<!--                                <div class="inner-wrapper">-->
<!--                                    <div class="card-information">-->
<!--                                        <div class="card-name fontBold">{{item.CardName}}</div>-->
<!--                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.yxdays}}天</div>-->
<!--                                        <div class="card-duration" v-else>有效期：不限期</div>-->
<!--                                    </div>-->
<!--                                    <div class="money-and-count"><span-->
<!--                                        class="card-money">￥{{item.SellingPrice}}</span>-->
<!--                                        &lt;!&ndash;/<span&ndash;&gt;-->
<!--                                        &lt;!&ndash;class="card-count">365天</span>&ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </section>-->
                        </div>
                    </a>
                    <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span
                        class="reach-bottom-text">已到底部</span></div>
                </div>
            </div>
        </div>
        <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="back" onclick="javascript:history.go(-1)"><i class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
            </div>
            <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                <div class="home"  @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getwxListMembersvip} from  '../api/getData'
    import {getStore} from '@/config/mUtils';
  export default {
    data() {
      return {
          cardList:[],
          loading:true,
      }
    },
    watch: {},
    methods: {
        toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
        },
        tocard_detail(id){
            this.$router.push({path:'/card_detail',query:{id:id}})
        },
        async getwxListMembersvip() {
            // debugger;
            this.loading = true;
            const crs = await getwxListMembersvip({
                StoresID:getStore('storesid'),
                StudentID:getStore('StudentID')
            })
            if(crs.orsuccess == "1"){
                this.loading = false;
                this.cardList = crs.data;
            }else {
                this.loading = false;
                this.$message({
                    message: crs.Msg,
                    type: 'error',
                    duration: 2000
                });
            }

        },
    },
    components: {},
    mounted() {

    },
    created() {
        this.getwxListMembersvip();
    },
    destroyed() {

    }
  }
</script>

<style scoped>

</style>
