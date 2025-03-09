export class Post{
    constructor(country, region, city) {
        this.country = country;
        this.region = region;
        this.city = city;
        this.likes = 0;
        this.date = new Date().toLocaleDateString('en-US',
             { year: 'numeric', month: '2-digit', day: '2-digit' });
      }

      addLike() {
        this.likes++;
        return this.likes; 
      }

}