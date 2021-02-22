<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn">
                <div class="navbarWrapper">
                    <div class="am-tab-bar">
                        <div class="am-tabs am-tabs-horizontal am-tabs-bottom">
                            <div class="am-tabs-content-wrap" style="position:relative">
                                <div class="am-tabs-pane-wrap am-tabs-pane-wrap-active">
                                    <div class="am-tab-bar-item">
                                        <div style="height:100%;position:relative">

                                            <div class="ShopCalendar__StickyTabWrapper-sc-1ovuswm-1 ggTRFk">
                                                <div class="am-tabs am-tabs-horizontal am-tabs-top">
                                                    <div class="am-tabs-tab-bar-wrap">
                                                        <div class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-top"
                                                        >
                                                            <div role="tablist" class="am-tabs-default-bar-content">
                                                                <div
                                                                    class="am-tabs-default-bar-tab"  :class="activeIndex == 1?'am-tabs-default-bar-tab-active':''" @click="changeTab(1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">购卡订单</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab" :class="activeIndex == 3?'am-tabs-default-bar-tab-active':''" @click="changeTab(3)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">购课订单</span>
                                                                    <i></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div class="list" v-if="orderList.length >0">
                                                    <van-list
                                                        v-if="activeIndex == 1"
                                                        v-model="tableLoading"
                                                        :finished="finished"
                                                        loading-text="加载中"
                                                        finished-text="已到底部"
                                                        direction="down"
                                                        :offset=10
                                                        @load="onLoad">
                                                    <div v-for="(item,index) in orderList " class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR kPDrbV">
                                                        <div class="CardTemplateComponent__CardWrapper-sc-1slov8k-0 gEySWP">
                                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate"  v-if="item.CradImgURL == ''"
                                                                     style="background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;">
                                                            <div class="inner-wrapper">
                                                                <div class="card-information">
                                                                    <div class="card-name fontBold" v-if="item.CardType == 1">{{item.CardDays}}天{{item.CardNumber}}次</div>
                                                                    <div class="card-name fontBold" v-if="item.CardType == 2">{{item.CardNumber}}次不限期</div>
                                                                    <div class="card-name fontBold" v-if="item.CardType == 3">{{item.CardDays}}天不限次</div>
                                                                    <div class="card-name fontBold" v-if="item.CardType == 4">{{item.Amount}}元不限期</div>
                                                                    <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.CardDays}}天</div>
                                                                    <div class="card-duration" v-else>有效期：不限期</div>
                                                                </div>
                                                                <div class="money-and-count"><span
                                                                    class="card-money">￥{{item.PurchaseAmount}}</span>
                                                                    <!--/<span-->
                                                                    <!--class="card-count">365天</span>-->
                                                                </div>
                                                            </div>
                                                        </section>
                                                            <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate" v-else
                                                                     :style="{backgroundImage: 'url('+item.CradImgURL+')',backgroundRepeat:'no-repeat'}">
                                                                <div class="inner-wrapper">
                                                                    <div class="card-information">
                                                                        <div class="card-name fontBold" v-if="item.CardType == 1">{{item.CardDays}}天{{item.CardNumber}}次</div>
                                                                        <div class="card-name fontBold" v-if="item.CardType == 2">{{item.CardNumber}}次不限期</div>
                                                                        <div class="card-name fontBold" v-if="item.CardType == 3">{{item.CardDays}}天不限次</div>
                                                                        <div class="card-name fontBold" v-if="item.CardType == 4">{{item.Amount}}元不限期</div>
                                                                        <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.CardDays}}天</div>
                                                                        <div class="card-duration" v-else>有效期：不限期</div>
                                                                    </div>
                                                                    <div class="money-and-count"><span
                                                                        class="card-money">￥{{item.PurchaseAmount}}</span>
                                                                        <!--/<span-->
                                                                        <!--class="card-count">365天</span>-->
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <div class="CardTemplateComponent__CardTemplateTextWrapper-sc-1slov8k-2 jzSyzs">
                                                                <h3><span class="name multiLine line-2">{{item.CardName}}</span></h3>
                                                                <p>订单号：{{item.OrderCode}}</p>
                                                                <p>购买时间：{{item.CreateTime}}</p>
                                                                <p v-if="item.OrderType  == '1' ">订单类型：购卡</p>
                                                                <p v-if="item.OrderType  == '2' ">订单类型：续费</p>
                                                                <span class="CardTemplateComponent__CardTemplatePrice-sc-1slov8k-1 dkRCIX">￥{{item.PurchaseAmount}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </van-list>
                                                    <van-list
                                                        v-if="activeIndex == 3"
                                                        v-model="tableLoading"
                                                        :finished="finished"
                                                        loading-text="加载中"
                                                        finished-text="已到底部"
                                                        direction="down"
                                                        :offset=100
                                                        @load="onLoad">
                                                        <div v-for="(item,index) in orderList " class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR kPDrbV">
                                                            <div class="CardTemplateComponent__CardWrapper-sc-1slov8k-0 gEySWP">
                                                                <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate"  v-if="item.CradImgURL == ''"
                                                                         style="background: url(../../static/images/redstyle/morenka.png) 0% 0% / cover;">
                                                                    <div class="inner-wrapper">
                                                                        <div class="card-information">
                                                                            <div class="card-name fontBold" v-if="item.CardType == 1">{{item.CardDays}}天{{item.CardNumber}}次</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 2">{{item.CardNumber}}次不限期</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 3">{{item.CardDays}}天不限次</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 4">{{item.Amount}}元不限期</div>
                                                                            <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.CardDays}}天</div>
                                                                            <div class="card-duration" v-else>有效期：不限期</div>
                                                                        </div>
                                                                        <div class="money-and-count"><span
                                                                            class="card-money">￥{{item.PurchaseAmount}}</span>
                                                                            <!--/<span-->
                                                                            <!--class="card-count">365天</span>-->
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                                <section class="NewCardTemplateComponent__Wrapper-sc-18n2c0i-0 cWMxiU default-cardTemplate" v-else
                                                                         :style="{backgroundImage: 'url('+item.CradImgURL+')',backgroundRepeat:'no-repeat'}">
                                                                    <div class="inner-wrapper">
                                                                        <div class="card-information">
                                                                            <div class="card-name fontBold" v-if="item.CardType == 1">{{item.CardDays}}天{{item.CardNumber}}次</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 2">{{item.CardNumber}}次不限期</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 3">{{item.CardDays}}天不限次</div>
                                                                            <div class="card-name fontBold" v-if="item.CardType == 4">{{item.Amount}}元不限期</div>
                                                                            <div class="card-duration" v-if="item.CardType == 3 || item.CardType == 1 ">有效期：{{item.CardDays}}天</div>
                                                                            <div class="card-duration" v-else>有效期：不限期</div>
                                                                        </div>
                                                                        <div class="money-and-count"><span
                                                                            class="card-money">￥{{item.PurchaseAmount}}</span>
                                                                            <!--/<span-->
                                                                            <!--class="card-count">365天</span>-->
                                                                        </div>
                                                                    </div>
                                                                </section>
                                                                <div class="CardTemplateComponent__CardTemplateTextWrapper-sc-1slov8k-2 jzSyzs">
                                                                    <h3><span class="name multiLine line-2">{{item.CardName}}</span></h3>
                                                                    <p>订单号：{{item.OrderCode}}</p>
                                                                    <p>购买时间：{{item.CreateTime}}</p>
                                                                    <p v-if="item.OrderType  == '1' ">订单类型：购卡</p>
                                                                    <p v-if="item.OrderType  == '2' ">订单类型：续费</p>
                                                                    <span class="CardTemplateComponent__CardTemplatePrice-sc-1slov8k-1 dkRCIX">￥{{item.PurchaseAmount}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </van-list>
                                                </div>

                                                <div class="list" v-if="orderList.length == 0">
                                                    <div
                                                        class="CalendarLessonList__EventListWrapper-sc-1puk8r9-0 iHZEDR">

                                                        <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw">
                                                            <i class="icon am-icon am-icon-colorful-holder a2"></i>
                                                            <div class="center" v-if="activeIndex == 1">暂无该类订单</div>
                                                            <div class="center" v-else>敬请期待</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Navigation__NavigationWrapper-sc-163do31-0 heqysv react-draggable">
                    <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                        <div class="back" onclick="javascript:history.go(-1)"><i class="icon am-icon am-icon-index-goback am-icon-s"></i></div>
                    </div>
                    <div class="Navigation__PageRedirectWrapper-sc-163do31-1 begceX">
                        <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getListOrder} from '../api/getData'
    import {getStore} from '@/config/mUtils';
  export default {
    data() {
      return {
          activeIndex:1,
          orderList:[],
          loading:true,
          tableLoading: false,
          finished: true,
          isAdding: false,
          pageIndex:0,
      }
    },
    watch: {},
    methods: {
        changeTab(num){
            this.orderList = [];
            this.pageIndex = 0;
            this.getListOrder(num,1)
        },
        onLoad() {
            if (!this.isAdding) {
                this.getListOrder(this.activeIndex,2);
            }
            this.tableLoading = false;
        },
        async getListOrder(data,num) {
            if(num == 1){
                this.pageIndex = 0;
                this.orderList = [];
            }
            this.loading = true;
            this.activeIndex = data;
            this.pageIndex = this.pageIndex +1;
            const crs = await getListOrder({
                StoresID:getStore('storesid'),
                OrderType:data,
                pages:this.pageIndex,
                psize:10,
                StudentID:getStore('StudentID'),
            })
            if (crs.orsuccess == "1") {

                if(crs.data.length != 0){
                    if(num == 1){
                        this.orderList = crs.data;
                        this.finished = false;
                        if(crs.data.length != 10){
                            this.finished = true;
                        }
                    }else {
                        crs.data.forEach((item,index)=>{
                            this.orderList.push(item);
                        })
                        if(crs.data.length != 10){
                            this.finished = true;
                        }
                    }
                }else {
                    this.finished = true;
                }
                let ele = this;
                setTimeout(() => {
                    ele.isAdding = false;
                    ele.loadingShow = false;
                    ele.listLoading = false;
                }, 1000);
                this.loading = false;
            } else {
                this.loading = false;
                this.$message({
                    message: crs.Msg,
                    type: 'error',
                    duration: 2000
                });
            }

        },
        toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
        },
    },
    components: {},
    mounted() {
        // $(function(){
        //
        //
        //     jQuery('.am-tabs-default-bar-tab').click(function() { TabSelect(".am-tabs-default-bar-tab", "div.lists", "am-tabs-default-bar-tab-active", jQuery(this)) });
        //     jQuery('.am-tabs-default-bar-tab').eq(0).trigger("click");
        //
        // });

//tab function
//         function TabSelect(tab,con,addClass,obj) {
//             var jQuery_self = obj;
//             var jQuery_nav = jQuery(tab);
//
//             jQuery_nav.removeClass(addClass),
//                 jQuery_self.addClass(addClass);
//
//             var jQuery_index = jQuery_nav.index(jQuery_self);
//             var jQuery_con = jQuery(con);
//             jQuery_con.hide(),
//                 jQuery_con.eq(jQuery_index).show();
//         }
    },
    created() {
        this.pageIndex = 0;
        this.getListOrder(1,1)

    },
    destroyed() {

    }
  }
</script>

<style scoped>
    .am-tabs-default-bar-top .am-tabs-default-bar-tab{width:50%;}
</style>
