using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
         IProductRepository ProductRepository {get;}
         IUserRepository UserRepository{get;}
         Task<bool> SaveAsync();
    }
}