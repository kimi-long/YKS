<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn slide push-enter-done">
                <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB" style="height: 100vh;">
                    <div v-for="(item,index) in AnnouncementList">
                        <div class="ShopAnnouncementIndex__TimeWrapper-bn879a-2 fMLXXM">
                            <span>{{item.addTime}}</span></div>
                        <div class="ShopAnnouncementIndex__AnnouncementCardWrapper-bn879a-0 kqplwA">
                            <div class="title-wrapper"><span class="title">{{item.Title}}</span></div>
                            <div class="content">
                                <div class="EllipsisText__EllipsisTextWrapper-sc-709ryd-0 eDgRmV">
                                    <div class="multiLine line-6">{{item.SContent}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                <div class="home" @click="toIndex"><i class="icon am-icon am-icon-index-home am-icon-s"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {StuGetListNotice} from  '../api/getData'
    import {getStore} from '@/config/mUtils';
    export default {
        components: {},
        data() {
            return {
                loading:true,
                AnnouncementList:[],
            }
        },

        created() {
            this.StuGetListNotice();
        },

        destroyed() {

        },

        mounted() {

        },
        computed: {},
        methods: {
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            async StuGetListNotice() {
                // debugger;
                this.loading = true;
                const crs = await StuGetListNotice({
                    StudentID: getStore('StudentID'),
                    pages:"1",
                    psize:"200"
                })
                if(crs.orsuccess == "1"){
                    this.loading = false;
                    this.AnnouncementList = crs.data;
                }else {
                    this.loading = false;
                    this.$message({
                        message: crs.Msg,
                        type: 'error',
                        duration: 2000
                    });
                }

            },
        }
    }

</script>

<style lang="less" scoped>

</style>
