<template>
    <div id="root">
        <div v-loading="loading"  element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 iIQNKn slide push-enter-done">
                <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB" style="height: 100vh;">
                    <van-list
                        v-model="tableLoading"
                        :finished="finished"
                        loading-text="加载中"
                        finished-text="已到底部"
                        direction="down"
                        :offset=10
                        @load="onLoad">
                    <div v-for="(item,index) in AnnouncementList">
                        <div class="ShopAnnouncementIndex__TimeWrapper-bn879a-2 fMLXXM">
                            <span>{{item.addTime}}</span></div>
                        <div class="ShopAnnouncementIndex__AnnouncementCardWrapper-bn879a-0 kqplwA">
                            <div class="title-wrapper"><span class="title">{{item.aTitle}}</span></div>
                            <div class="content">
                                <div class="EllipsisText__EllipsisTextWrapper-sc-709ryd-0 eDgRmV">
                                    <div class="multiLine line-6">{{item.aInfo}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </van-list>
<!--                    <div class="EmptyHolder__BottomLineWrapper-k5v4ua-2 bnWMth"><span-->
<!--                        class="reach-bottom-text">已到底部</span></div>-->
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
    import {getListAnnouncement} from  '../api/getData'
    import {getStore} from '@/config/mUtils';
	export default {
		components: {},
		data() {
			return {
			    loading:true,
                AnnouncementList:[],
                tableLoading: false,
                finished: true,
                isAdding: false,
                pageIndex:0,
            }
		},

		created() {
		    this.getListAnnouncement(1);
		},

		destroyed() {

		},

		mounted() {

		},
		computed: {},
		methods: {
            onLoad() {
                if (!this.isAdding) {
                    this.getListAnnouncement(2);
                }
                this.tableLoading = false;
            },
            toIndex(){
                this.$router.push({path:'/',query:{storesid:getStore('storesid'),openid:getStore('openid')}})
            },
            async getListAnnouncement(num) {
                // debugger;
                if(num == 1){
                    this.pageIndex = 0;
                    this.AnnouncementList = [];
                }
                this.loading = true;
                this.pageIndex = this.pageIndex +1;
                const crs = await getListAnnouncement({
                    StoresID:getStore('storesid'),
                    pages:this.pageIndex,
                    psize:"10"
                })
                if(crs.orsuccess == "1"){
                    this.AnnouncementList = crs.data;
                    if(crs.data.length != 0){
                        if(num == 1){
                            this.AnnouncementList = crs.data;
                            this.finished = false;
                            if(crs.data.length != 10){
                                this.finished = true;
                            }
                        }else {
                            crs.data.forEach((item,index)=>{
                                this.AnnouncementList.push(item);
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
        }
	}

</script>

<style lang="less" scoped>

</style>
