using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext dc;
        public ProductRepository(DataContext dc){
            this.dc = dc;
        }
        public void AddProduct(Product product)
        {
            dc.Products.AddAsync(product);
        }

        public void DeleteProduct(int ProductId)
        {
            var product = dc.Products.Find(ProductId);
            dc.Products.Remove(product);
        }

        public async Task<Product> FindProduct(int id)
        {
            return await dc.Products.FindAsync(id);
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await dc.Products.ToListAsync();
        }

    }
}