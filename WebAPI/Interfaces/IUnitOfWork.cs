using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
         IProductRepository ProductRepository {get;}
         Task<bool> SaveAsync();
    }
}