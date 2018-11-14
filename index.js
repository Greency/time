const time = (function () {
    const REG_FORMAT = /(Y{2,4})|(M{1,2})|(D{1,2})|(h{1,2})|(m{1,2})|(s{1,2})/g;

    /**
     * 解析日期
     * @param {*} date 具体的日期
     * @return {Date}
     */
    const parseDate = function (date) {
        if (!date) return new Date();
        if (date instanceof Date) return date;
        if (date) return new Date(date);
    }



    class Time {
        constructor(date) {
            this._date = parseDate(date);
            this.init();
        }
        
        /**
         * 初始化日期的数据
         *  */
        init(){
            this._Y = this._date.getFullYear();
            this._M = this._date.getMonth() + 1;
            this._D = this._date.getDate();
            this._h = this._date.getHours();
            this._m = this._date.getMinutes();
            this._s = this._date.getSeconds();
        }

        /**
         * 格式化日期
         * @param {String} str 按照str的格式来格式化日期 
         */
        format(str){
            if(!typeof str === 'string') new Error(` '${str}' 不是一个字符串！`);

            return str.replace(REG_FORMAT, (match)=>{
                switch(match){
                    case 'YYYY':
                        return this._Y;
                    case 'YY': 
                        return this._Y.slice(-2);
                    case 'MM':
                        return this._M < 10 ? `0${this._M}` : this._M;
                    case 'M':
                        return this._M;
                    case 'DD': 
                        return this._D < 10 ? `0${this._D}` : this._D;
                    case 'D':
                        return this._D;
                    case 'hh': 
                        return this._h < 10 ? `0${this._h}` : this._h;
                    case 'h':
                        return this._h;
                    case 'mm':
                        return this._m < 10 ? `0${this._m}` : this._m;
                    case 'm': 
                        return this._m;
                    case 'ss':
                        return this._s < 10 ? `0${this._s}` : this._s;
                    case 's':
                        return this._s;
                    default: 
                        new Error(` '${match}' 解析出错！`);
                }   
            });
        }
    }


    return function (timeStr) {
        return new Time(timeStr);
    }
})();

export default time;
