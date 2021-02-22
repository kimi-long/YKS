<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn slide pop-enter-done">
                <div class="WhiteBackground-dfe6q2-0 hMZFoN overflowAuto">
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
                                                                <div class="am-tabs-default-bar-tab" :class="activeIndex2 == 1?'am-tabs-default-bar-tab-active':''" @click="getListEvaluate(activeIndex,1,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF" >评价课程</span>
                                                                    <i></i>
                                                                </div>
                                                                <div class="am-tabs-default-bar-tab"  :class="activeIndex2 == 2?'am-tabs-default-bar-tab-active':''" @click="getListEvaluate(activeIndex,2,1)">
                                                                    <span
                                                                        class="ShopCalendar__TabTitle-sc-1ovuswm-2 kSYPKF">评价老师</span>
                                                                    <i></i>
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
                    </div>
                    <div class="CommentIndex__SelectorWrapper-sc-1xxb0mz-0 fOrCPA">
                        <div class="CommentIndex__Selector-sc-1xxb0mz-1 dIGxSL" :class="activeIndex == 0?'active':''" @click="getListEvaluate(0,activeIndex2,1)">全部({{allcount0}})</div>
                        <div class="CommentIndex__Selector-sc-1xxb0mz-1 dIGxSL" :class="activeIndex == 1?'active':''" @click="getListEvaluate(1,activeIndex2,1)">好评({{allcount1}})</div>
                        <div class="CommentIndex__Selector-sc-1xxb0mz-1 dIGxSL" :class="activeIndex == 2?'active':''" @click="getListEvaluate(2,activeIndex2,1)">普通({{allcount2}})</div>
                        <div class="CommentIndex__Selector-sc-1xxb0mz-1 dIGxSL" :class="activeIndex == 3?'active':''" @click="getListEvaluate(3,activeIndex2,1)">差评({{allcount3}})</div>
                    </div>
                    <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB">
                        <div class="list" v-if="commmentList.length > 0">
                            <van-list
                                v-model="tableLoading"
                                :finished="finished"
                                loading-text="加载中"
                                finished-text="已到底部"
                                direction="down"
                                :offset=10
                                @load="onLoad">
                            <div class="CommentCard__CommentShow-sc-1d8hyig-0 dGHSuO" v-for="(item,index) in commmentList">
                                <img v-if="item.isAnonymous == '1'":src="item.HeadUrl" class="image" style="visibility: visible;">
                                <img v-else src="../../static/images/redstyle/moren.png" class="image" style="visibility: visible;">
                                <div class="text">
                                    <div class="name">
                                        <span v-if="item.isAnonymous == '2'">匿名</span>
                                        <span v-else>{{item.Name}}</span>
                                        <span class="time">{{item.addTime}}</span>
                                    </div>
                                    <div class="rate">打分<div class="level"><i
                                        class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                        :class=" item.Evaluatestar >0 ? 'am-icon-star':'am-icon-star-none'"
                                    ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >1 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >2 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >3 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>
                                        <i
                                            class="icon am-icon Rate__IconStyled-sc-11eowge-0 fDPgoS am-icon-xxs"
                                            :class=" item.Evaluatestar >4 ? 'am-icon-star':'am-icon-star-none'"
                                        ></i>

                                    </div>
                                    </div>
                                    <div class="content">{{item.EvaluateInfo}}</div>
                                </div>
                            </div>
                            </van-list>
                        </div>

                        <div class="lists" v-if="commmentList.length == 0">
                            <div class="EmptyHolder__EmptyHolderWrapper-k5v4ua-1 dzUnVw">
                                <i class="icon am-icon am-icon-new-timetable-holder"></i>
                                <div class="center">暂无该类评论</div>
                            </div>
                        </div>
<!--                        <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span-->
<!--                            class="reach-bottom-text">已到底部</span></div>-->
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
</template>

<script>
    import {getListEvaluate} from  '../api/getData'
    import {getStore} from '@/config/mUtils';
  export default {
    data() {
      return {
          loading:true,
          activeIndex:0,
          activeIndex2:1,
          allcount0: 0,
          allcount1: 0,
          allcount2: 0,
          allcount3: 0,
          commmentList:[],
          tableLoading: false,
          finished: true,
          isAdding: false,
          pageIndex:0,
      }
    },
    watch: {},
    methods: {
        onLoad() {
            if (!this.isAdding) {
                this.getListOrder(this.activeIndex,this.activeIndex2,2);
            }
            this.tableLoading = false;
        },

        toIndex(){
             this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
        },
        async getListEvaluate(type,type2,num) {
            if(num == 1){
                this.pageIndex = 0;
                this.commmentList = [];
            }
            // debugger;
            this.pageIndex = this.pageIndex +1;
            this.loading = true;
            this.activeIndex = type;
            this.activeIndex2 = type2;
            const crs = await getListEvaluate({
                StoresID:getStore('storesid'),
                StudentID:getStore('StudentID'),
                pages:this.pageIndex,
                psize:"10",
                EvaluateType:type,
                IType:type2
            })
            if(crs.orsuccess == "1"){
                this.allcount0 = crs.allcount0;
                this.allcount1 = crs.allcount1;
                this.allcount2 = crs.allcount2;
                this.allcount3 = crs.allcount3;
                if(crs.data.length != 0){
                    if(num == 1){
                        this.commmentList = crs.data;
                        this.finished = false;
                        if(crs.data.length != 10){
                            this.finished = true;
                        }
                    }else {
                        crs.data.forEach((item,index)=>{
                            this.commmentList.push(item);
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
        //jQuery('.dIGxSL').click(function () { TabSelect(".dIGxSL", "div.lists", "active", jQuery(this)) });
        jQuery('.dIGxSL').eq(0).trigger("click");
        jQuery('#duice').click(function () {
            jQuery('.wthpop').show();
        })
        jQuery('.wthpop>p>span').click(function () {
            jQuery('.wthpop').hide()
        })

        //tab function
        // function TabSelect(tab, con, addClass, obj) {
        //     var jQuery_self = obj;
        //     var jQuery_nav = jQuery(tab);
        //
        //     jQuery_nav.removeClass(addClass),
        //         jQuery_self.addClass(addClass);
        //
        //     var jQuery_index = jQuery_nav.index(jQuery_self);
        //     var jQuery_con = jQuery(con);
        //     jQuery_con.hide(),
        //         jQuery_con.eq(jQuery_index).show();
        // }
    },
    created() {
        this.getListEvaluate(0,1,1);
    },
    destroyed() {

    }
  }
</script>

<style scoped>
    .am-tabs-default-bar-top .am-tabs-default-bar-tab{width:50%;}
</style>
