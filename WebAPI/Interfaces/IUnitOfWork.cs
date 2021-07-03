using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
         IProductRepository ProductRepository {get;}
         IUserRepository UserRepository{get;}
         IOrderRepository orderRepository{get;}

         Task<bool> SaveAsync();
    }
}