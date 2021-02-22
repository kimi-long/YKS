<template>
    <div id="root">
        <div v-loading="loading"   element-loading-custom-class="loading_color" element-loading-spinner="el-icon-loading">
            <div class="ThemedWrapper-jd76ve-0 hnMLRX slide pop-enter-done">
                <div class="InfiniteScroller__ScrollerWrapper-x1lcuc-0 hMVrB" style="height: 100vh; padding-top: 8px;">
                    <div class="TeacherIndex__TeacherCardWrapper-sc-1pgbwvq-0 gZYlbI" v-for="(item,index) in teacherList" @click="toteachers_detail(item.ID)"><a>
                        <div class="TeacherShowCard__TeacherShow-sc-4612w5-0 bsdZHA">
                            <div class="brief"><img
                                :src="item.HeadUrl"
                                class="image" style="visibility: visible;">
                                <div class="text oneLine">
                                    <div class="name"><span>{{item.Name}}</span></div><span class="experience">{{item.Title}}</span>
                                </div>
                            </div>
                            <div class="introduction">{{item.Introduce}}</div>
                        </div>
                    </a></div>
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
    import {getListTeacher} from  '../api/getData';
    import {getStore} from '@/config/mUtils';
  export default {
    data() {
      return {
          loading:false,
          teacherList:[]
      }
    },
    watch: {},
    methods: {
        toteachers_detail(id){
            this.$router.push({path:'/teachers_detail',query:{id:id}})
        },
        async getListTeacher() {
            // debugger;
            this.loading = true;
            const crs = await getListTeacher({
                StoresID:getStore('storesid'),
            })
            if(crs.orsuccess == "1"){
                this.loading = false;
                this.teacherList = crs.data;
            }else {
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

    },
    created() {
        this.getListTeacher();
    },
    destroyed() {

    }
  }
</script>

<style scoped>

</style>
