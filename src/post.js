export class Post{
    constructor(type,country, region, district, description) {
        this.description = description;
        this.type = type;
        this.country = country;
        this.region = region;
        this.district = district;
        this.likes = 0;
        this.date = new Date().toLocaleDateString('en-US',
             { year: 'numeric', month: '2-digit', day: '2-digit' });
      }

      addLike() {
        this.likes++;
        return this.likes; 
      }

}