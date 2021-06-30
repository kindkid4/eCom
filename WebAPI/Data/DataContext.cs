 using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users {get;set;}
        public DbSet<CategoryType> CategoryType {get;set;}
        public DbSet<Description> Descriptions {get;set;}
        
    }
}